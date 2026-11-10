import "./FireFoxFooter.css";

const groups = [
    {
        title: "Download",
        links: [
            { name: "Firefox Desktop", url: "https://www.firefox.com/en-US/download/" },
            { name: "Firefox for Android", url: "https://www.firefox.com/en-US/download/android/" },
            { name: "Firefox for iOS", url: "https://www.firefox.com/en-US/download/ios/" }
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Firefox Support", url: "https://support.mozilla.org/en-US/products/firefox" },
            { name: "Release Notes", url: "https://www.firefox.com/en-US/releases/" },
            { name: "Developer Edition", url: "https://www.firefox.com/en-US/channel/desktop/developer/" }
        ]
    }
];

function FireFoxFooter() {
    return (
        <footer className="footer-box">
            {groups.map(function (group) {
                return (
                    <div key={group.title}>
                        <h3>{group.title}</h3>
                        <ul className="footer-links">
                            {group.links.map(function (link) {
                                return (
                                    <li key={link.name}>
                                        <a href={link.url} className="footer-link">{link.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
            <form className="language-form">
                <label htmlFor="page-language-select">Language</label>
                <select id="page-language-select" name="lang" defaultValue="en-US">
                    <option value="zh-TW">正體中文 (繁體)</option>
                    <option value="Eng">GOOOOOOOOOOOOON</option>
                    <option value="divit">GOOOON</option>
                    <option value="Tam">GOOON</option>
                </select>
            </form>
        </footer>
    );
}

export default FireFoxFooter;
