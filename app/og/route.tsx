import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";
import { metaData } from "app/config";

const dir = join(process.cwd(), "app/og");
const assets = Promise.all([
  readFile(join(dir, "dm-sans-400.woff")),
  readFile(join(dir, "dm-sans-500.woff")),
  readFile(join(dir, "profile.jpg")),
]);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  const isHome = !title || title === metaData.seoTitle;

  const [regular, medium, photo] = await assets;
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    isHome ? (
      <div tw="flex w-full h-full items-center justify-between bg-[#121212] px-24">
        <div tw="flex flex-col">
          <div tw="text-[104px] font-medium text-white tracking-tight leading-none">
            Prince
          </div>
          <div tw="mt-8 text-[44px] text-[#a3a3a3]">Design engineer in London</div>
          <div tw="mt-3 text-[36px] text-[#737373]">I design it. I build it.</div>
          <div tw="mt-16 text-[28px] text-[#737373]">pixelprince.dev</div>
        </div>
        <img src={photoSrc} width={300} height={300} tw="rounded-full" />
      </div>
    ) : (
      <div tw="flex flex-col w-full h-full justify-between bg-[#121212] px-24 py-20">
        <div tw="flex text-[64px] font-medium text-white tracking-tight leading-tight">
          {title}
        </div>
        <div tw="flex items-center">
          <img src={photoSrc} width={72} height={72} tw="rounded-full" />
          <div tw="ml-6 text-[30px] text-[#a3a3a3]">Prince</div>
          <div tw="ml-4 text-[30px] text-[#525252]">·</div>
          <div tw="ml-4 text-[30px] text-[#737373]">pixelprince.dev</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "DM Sans", data: regular, weight: 400, style: "normal" },
        { name: "DM Sans", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
