import React from 'react';

/**
 * A reusable component to display a company logo with a link.
 * @param {object} props - The component props.
 * @param {string} props.href - The URL the logo links to.
 * @param {string} props.src - The source URL of the logo image.
 * @param {string} props.alt - The alt text for the logo image.
 * @param {string} props.customClass - Additional CSS classes for custom sizing.
 */
const CompanyLogo = ({ href, src, alt, customClass }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img
                className={`h-auto  hover:scale-110 transition-transform duration-200 ${customClass}`}
                src={src}
                alt={alt}
            />
        </a>
    );
};

export default CompanyLogo;
