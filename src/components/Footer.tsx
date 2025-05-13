import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#B3DDF2] text-center py-8 text-sm text-navy">
      <div className="flex justify-center gap-4 mb-4">
        {["tiktok", "insta", "facebook", "youtube", "linkedin"].map(
          (platform) => (
            <Image
              key={platform}
              src={`/${platform}.avif`}
              alt={platform}
              width={30}
              height={30}
            />
          )
        )}
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
