import React, { useState } from "react";
import { ContactsFilled, FacebookFilled, GithubFilled, InstagramFilled } from "@ant-design/icons";
import { FloatButton } from "antd";

const Contact: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <>
            <FloatButton.Group
                open={open}
                trigger="click"
                style={{ insetInlineEnd: 24 }}
                icon={<ContactsFilled />}
                onClick={toggleOpen}
            >
                <FloatButton
                    icon={<FacebookFilled />}
                    href="https://www.facebook.com/thnes.cxm.phul"
                    style={{ backgroundColor: "#D1D5DB" }} // สีเทาอ่อน

                />
                <FloatButton
                    icon={<InstagramFilled />}
                    href="https://www.instagram.com/etantj._"
                    target="blank"
                    style={{ backgroundColor: "#D1D5DB" }} // สีเทาอ่อน

                />
                <FloatButton
                    icon={<GithubFilled />}
                    href="https://github.com/LuckyThanet"
                    target="blank"
                    style={{ backgroundColor: "#D1D5DB" }} // สีเทาอ่อน
                />
            </FloatButton.Group>
        </>
    );
};

export default Contact;