class ReccyTracker {
    constructor(userId, apiUrl) {
        this.userId = userId;
        this.apiUrl = apiUrl;
        this.sessionStartTime = Date.now();
        this.lastInteractionTime = this.sessionStartTime;
        this.setupTracking();
    }

    setupTracking() {
        // Track page views
        this.trackPageView();

        // Track clicks
        document.addEventListener('click', (e) => {
            this.trackInteraction('click', {
                element: e.target.tagName,
                elementId: e.target.id,
                elementClass: e.target.className,
                text: e.target.textContent?.substring(0, 100)
            });
        });

        // Track scroll depth
        let maxScroll = 0;
        document.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                    this.trackInteraction('scroll_depth', {
                        depth: maxScroll
                    });
                }
            }
        });

        // Track time on page when leaving
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.trackTimeOnPage();
            }
        });

        // Update last interaction time
        document.addEventListener('mousemove', () => {
            this.lastInteractionTime = Date.now();
        });
        document.addEventListener('keypress', () => {
            this.lastInteractionTime = Date.now();
        });
    }

    async trackInteraction(type, data = {}) {
        try {
            const interaction = {
                user_id: this.userId,
                type: type,
                page: window.location.pathname,
                timestamp: new Date().toISOString(),
                ...data
            };

            await fetch(`${this.apiUrl}/track-interaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(interaction)
            });
        } catch (error) {
            console.error('Failed to track interaction:', error);
        }
    }

    trackPageView() {
        this.trackInteraction('pageview', {
            title: document.title,
            referrer: document.referrer
        });
    }

    trackTimeOnPage() {
        const activeTime = (this.lastInteractionTime - this.sessionStartTime) / 1000; // in seconds
        this.trackInteraction('time_on_page', {
            duration: activeTime
        });
    }
}

// Usage:
// <script src="tracking.js"></script>
// <script>
//   const tracker = new ReccyTracker('USER_ID', 'API_URL');
// </script>
