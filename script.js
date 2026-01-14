// Basic JavaScript for your site
console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    alert('आपकी वेबसाइट सफलतापूर्वक लोड हो गई है!');
    
    // Simple contact form
    const contactBtn = document.querySelector('.btn');
    if(contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#contact') {
                e.preventDefault();
                alert('संपर्क जानकारी: info@yourbrand.com');
            }
        });
    }
});
