import fs from "fs";
import path from "path";

export type ProjectCaseStudyMeta = {
  title: string;
  year: string;
  description: string;
  tech?: string;
  role?: string;
  status?: string;
};

export type DesignCaseStudyMeta = {
  title: string;
  year: string;
  description: string;
  tools?: string;
  status?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const metadata: Record<string, string> = {};

  frontMatterBlock
    .trim()
    .split("\n")
    .forEach((line) => {
      const [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");
      metadata[key.trim()] = value;
    });

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function getMDXData(dir: string) {
  return getMDXFiles(dir).map((file) => {
    const { metadata, content } = parseFrontmatter(
      fs.readFileSync(path.join(dir, file), "utf-8")
    );
    return {
      metadata,
      slug: path.basename(file, path.extname(file)),
      content,
    };
  });
}

export function getProjectCaseStudies() {
  return getMDXData(
    path.join(process.cwd(), "content", "projects")
  ) as { metadata: ProjectCaseStudyMeta; slug: string; content: string }[];
}

export function getDesignCaseStudies() {
  return getMDXData(
    path.join(process.cwd(), "content", "designs")
  ) as { metadata: DesignCaseStudyMeta; slug: string; content: string }[];
}
