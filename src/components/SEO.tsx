import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export const SEO = ({ title, description, canonical, noindex = false }: SEOProps) => {
  const location = useLocation();
  const baseDomain = "https://www.isisecurity.in";

  const defaultTitle = "ISI - Industrial Security & Intelligence (I) Pvt. Ltd";
  const formattedTitle = title
    ? title.includes("ISI")
      ? title
      : `${title} | ISI Security`
    : defaultTitle;

  const formattedDescription =
    description ||
    "ISI is an ISO 9001:2015 certified company providing comprehensive security solutions including guarding services, electronic security, and risk consulting across India.";

  // Normalize canonical path
  const canonicalPath = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${baseDomain}${canonical.startsWith("/") ? "" : "/"}${canonical}`
    : `${baseDomain}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", formattedDescription);

    // 3. Update Canonical Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalPath);

    // 4. Update OpenGraph URL
    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement("meta");
      metaOgUrl.setAttribute("property", "og:url");
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute("content", canonicalPath);

    // 5. Update OpenGraph Title
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute("content", formattedTitle);

    // 6. Update Meta Robots Tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow");

  }, [formattedTitle, formattedDescription, canonicalPath, noindex]);

  return null;
};

export default SEO;
