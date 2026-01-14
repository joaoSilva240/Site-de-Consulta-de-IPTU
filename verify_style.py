from playwright.sync_api import sync_playwright
import time

def verify_style():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Wait a bit for potential reload
        time.sleep(2)

        # Take a screenshot
        page.screenshot(path="verification/style_update_2026.png")

        # Verify Footer Text
        # Using a more robust selector or check
        content = page.content()
        if "© 2026 Prefeitura Municipal de Boituva." in content:
             print("Footer verified: Correct")
        else:
             print("Footer verified: Incorrect (Text not found)")

        browser.close()

if __name__ == "__main__":
    verify_style()
