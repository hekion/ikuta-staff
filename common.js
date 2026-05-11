document.addEventListener("DOMContentLoaded", function() {
    // Font Awesomeの読み込み（アイコン用）
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fontAwesome);

    const isSubFolder = window.location.pathname.includes('/manual/') || 
                        window.location.pathname.includes('/setup/') || 
                        window.location.pathname.includes('/lost/') || 
                        window.location.pathname.includes('/roster/') || 
                        window.location.pathname.includes('/inventory/') || 
                        window.location.pathname.includes('/pop/') || 
                        window.location.pathname.includes('/contacts/');

    const pathPrefix = isSubFolder ? '../' : './';

    const headerHtml = `
    <div class="sticky-header">
        <header>
            <a href="${pathPrefix}" style="text-decoration: none; display: inline-block;">
                <img src="${pathPrefix}assets/images/ikutalogo.png" alt="FRONTOWN IKUTA">
                <div class="sub-title">STAFF PORTAL</div>
            </a>
        </header>
        <nav class="nav-menu">
            <ul>
                <li><a href="${pathPrefix}manual/">マニュアル</a></li>
                <li><a href="${pathPrefix}setup/">準備物</a></li>
                <li><a href="${pathPrefix}lost/">落とし物</a></li>
                <li><a href="${pathPrefix}roster/">名簿</a></li>
                <li><a href="${pathPrefix}inventory/">備品検索</a></li>
                <li><a href="${pathPrefix}pop/">掲示物</a></li>
                <li><a href="${pathPrefix}contacts/">連絡先</a></li>
            </ul>
        </nav>
    </div>
    `;

    const footerHtml = `
    <footer class="site-footer">
        <div class="turf-line"></div>
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>KAWASAKI FRONTALE</h3>
                    <div class="sns-icons">
                        <a href="https://www.frontale.co.jp/" target="_blank" title="公式サイト"><i class="fas fa-globe"></i></a>
                        <a href="https://www.youtube.com/user/frontalechannel" target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://x.com/frontale_staff" target="_blank" title="X"><i class="fab fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/kawasaki_frontale/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@frontale.official" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a>
                        <a href="https://page.line.me/frontale" target="_blank" title="LINE"><i class="fab fa-line"></i></a>
                        <a href="https://www.facebook.com/kawasakifrontaleofficial" target="_blank" title="Facebook"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>OFFICIAL FACILITIES</h3>
                    <ul class="facility-list">
                        <li>
                            <span class="fac-name">フロンタウン生田</span>
                            <div class="fac-links">
                                <a href="https://ikuta.frontown.com/" target="_blank">HP</a>
                                <a href="https://x.com/frontown_ikuta" target="_blank"><i class="fab fa-x-twitter"></i></a>
                            </div>
                        </li>
                        <li>
                            <span class="fac-name">フロンタウンさぎぬま</span>
                            <div class="fac-links">
                                <a href="https://saginuma.frontown.com" target="_blank">HP</a>
                                <a href="https://x.com/frontale_futsal" target="_blank"><i class="fab fa-x-twitter"></i></a>
                            </div>
                        </li>
                        <li>
                            <span class="fac-name">富士通スタジアム川崎</span>
                            <div class="fac-links">
                                <a href="https://kawasaki-fujimi.com/" target="_blank">HP</a>
                                <a href="https://x.com/kawasaki_fujimi" target="_blank"><i class="fab fa-x-twitter"></i></a>
                            </div>
                        </li>
                        <li>
                            <span class="fac-name">富士見公園</span>
                            <div class="fac-links">
                                <a href="https://fujimi-park.com" target="_blank">HP</a>
                                <a href="https://x.com/fujimi_X" target="_blank"><i class="fab fa-x-twitter"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="copyright">&copy; 2026 FRONTOWN IKUTA</p>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHtml);
    document.body.insertAdjacentHTML('beforeend', footerHtml);
});
