// Footer component definition
const Footer = () => {
    return (
        // Footer HTML structure with the class 'd-footer'
        <footer className="d-footer">
            {/* Row container with alignment for the footer content */}
            <div className="row align-items-center justify-content-between">
                {/* Left side of the footer */}
                <div className="col-auto">
                    {/* Copyright text with link to Accountant website */}
                    <p className="mb-0">
                        Copyright © 2024 {/* Link to Accountant website */}
                        <a
                            className="text-primary-600"
                            href="https://accountant.eclipseintellitech.com/"
                        >
                            Accountant
                        </a>
                        .
                    </p>
                </div>

                {/* Right side of the footer */}
                <div className="col-auto">
                    {/* Powered by text with link to Eclipse Intellitech website */}
                    <p className="mb-0">
                        Powered by
                        {/* Link to Eclipse Intellitech website */}{" "}
                        <a
                            className="text-primary-600"
                            href="https://eclipseintellitech.com/"
                        >
                            Eclipse Intellitech Limited
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Export the Footer component to be used in other parts of the app
export default Footer;
