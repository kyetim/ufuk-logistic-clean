from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Test KVK Page
    print("Testing KVK Page...")
    page.goto("http://localhost:5173/kvk")
    page.wait_for_timeout(1500)

    # Scroll down to ensure we capture the sanitized contact info section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1500)
    page.screenshot(path="/home/jules/verification/screenshots/kvk_verification.png")

    # Test Press News Detail Page
    print("Testing Press News Detail Page...")
    page.goto("http://localhost:5173/press-room/news/1")
    page.wait_for_timeout(1500)
    page.screenshot(path="/home/jules/verification/screenshots/news_verification.png")

    # Test Event Detail Page
    print("Testing Event Detail Page...")
    page.goto("http://localhost:5173/press-room/events/1")
    page.wait_for_timeout(1500)
    page.screenshot(path="/home/jules/verification/screenshots/event_verification.png")

    page.wait_for_timeout(1000)  # Hold final state for the video

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()