import Image from "next/image";

export default function Footer() {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@ubcpilatesclub",
    insta: "https://www.instagram.com/ubcpilatesclub",
    facebook: "https://www.facebook.com/ubcpilatesclub",
    youtube: "https://www.youtube.com/channel/UCUu2kA1LHuHkwjaYiEq6NzA",
    linkedin: "https://www.linkedin.com/company/ams-pilates-club-at-ubc/?fbclid=IwAR0IDxNpmCAypn1e-174WHoNaCSXx0zk6TRLCFXgijGNBqoXn4meI1bYdk0",
  };

  return (
    <footer className="bg-[#B3DDF2] text-center py-8 text-sm text-navy">
      <div className="flex justify-center gap-4 mb-4">
        {Object.entries(socialLinks).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/${platform}.avif`}
              alt={platform}
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>
      <div className="space-y-1">
        <p>ubcpilatesclub@gmail.com</p>
        <p>6138 Student Union Blvd</p>
        <p>Vancouver, V6T 1Z1</p>
        <p>Canada</p>
      </div>
      <div className="mt-5 pt-8 border-t border-navy text-center text-navy">
        <p>
          © {new Date().getFullYear()} UBC Pilates Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
