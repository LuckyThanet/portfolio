import React, { useState } from "react";
import { ContactsFilled, FacebookFilled, GithubFilled, InstagramFilled } from "@ant-design/icons";
import { FloatButton } from "antd";

const Contact: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <FloatButton.Group
            open={open}
            trigger="click"
            style={{ insetInlineEnd: 24 }}
            icon={<ContactsFilled />}
            onClick={toggleOpen}
        >
            <a href="https://www.facebook.com/thnes.cxm.phul" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FloatButton
                    icon={<FacebookFilled />}
                    style={{ backgroundColor: "#D1D5DB" }}
                />
            </a>

            <a href="https://www.instagram.com/etantj._" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FloatButton
                    icon={<InstagramFilled />}
                    style={{ backgroundColor: "#D1D5DB" }}
                />
            </a>

            <a href="https://github.com/LuckyThanet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FloatButton
                    icon={<GithubFilled />}
                    style={{ backgroundColor: "#D1D5DB" }}
                />
            </a>
        </FloatButton.Group>
    );
};

export default Contact;