import { MDXComponents } from "mdx/types";
import { TableComponent } from "./table-component";
import { ImageComponent } from "./image-component";
import { Highlight } from "./highlight";
import { BlockQuote } from "./block-quote";
import { WhiteBox } from "./white-box";
import { Checklist } from "./checklist";
import { ImageCredits } from "./image-credits";
import { YouTubeEmbed } from "./youtube-embed";
import { GalleryImage, ImageGallery } from "./image-galery";

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h3 className="text-black text-[36px] leading-9 sm:text-[44px] sm:leading-11 lg:text-[52px] lg:leading-[52px] tracking-tight font-bold font-familjen mt-10 mb-8 first:-mt-3">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="text-black text-[28px] leading-7 sm:text-[34px] sm:leading-[34px] lg:text-[40px] lg:leading-10 tracking-tight font-semibold font-familjen mt-10 mb-8 first:-mt-3">
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="text-xl leading-5 sm:text-[22px] sm:leading-[22px]  xl:text-[26px] xl:leading-[26px] font-medium text-black font-familjen mt-10 mb-8 first:-mt-3">
      {children}
    </h5>
  ),
  p: ({ children }) => (
    <p className="sm:text-lg font-medium text-black leading-[22px] sm:leading-[25px] mt-5 first:-mt-1">
      {children}
    </p>
  ),
  ul: ({ children }) => <ul className="mt-5 first:mt-0">{children}</ul>,
  ol: ({ children }) => <ol className="mt-5 first:mt-0">{children}</ol>,
  li: ({ children }) => (
    <li className="mt-3 sm:text-lg font-medium text-black leading-[22px] sm:leading-[25px]">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="">{children}</blockquote>
  ),
  strong: ({ children }) => <strong className="">{children}</strong>,
  em: ({ children }) => <em className="">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline underline-offset-2 text-custom-accent "
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  hr: () => <hr className="h-0.5 w-full bg-custom-gray my-10" />,
  code: ({ children }) => <code className="">{children}</code>,
  pre: ({ children }) => <pre className="">{children}</pre>,

  table: ({ children }) => (
    <div className="hidden lg:block overflow-x-auto mb-8">
      <table className="w-full border border-custom-gray text-left sm:text-lg font-medium text-black leading-[22px] sm:leading-[25px]">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,

  tbody: ({ children }) => <tbody>{children}</tbody>,

  tr: ({ children }) => <tr className="">{children}</tr>,

  th: ({ children }) => (
    <th className="px-4 py-4 font-semibold text-gray-700">{children}</th>
  ),

  td: ({ children }) => <td className="px-4 py-2">{children}</td>,

  TableComponent: (props) => <TableComponent {...props} />,
  ImageComponent: (props) => <ImageComponent {...props} />,
  Highlight: (props) => <Highlight {...props} />,
  BlockQuote: (props) => <BlockQuote {...props} />,
  WhiteBox: (props) => <WhiteBox {...props} />,
  Checklist: (props) => <Checklist {...props} />,
  ImageCredits: (props) => <ImageCredits {...props} />,
  YouTubeEmbed: (props) => <YouTubeEmbed {...props} />,
  GalleryImage: (props) => <GalleryImage {...props} />,
  ImageGallery: (props) => <ImageGallery {...props} />,
};
