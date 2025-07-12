import { CustomMarkdownRenderer } from "../../components/CustomMarkdownRenderer";
import { BASEURL } from "../../constants";

export const getServerSideProps = async (context) => {
  const blog = await fetch(`${BASEURL}/cv`);
  const cvData = await blog.json();
  return {
    props: {
      cv: cvData.data,
    },
  };
};

export default function Index({ cv }) {
  return (
    <article className="p-8">
      <CustomMarkdownRenderer content={cv.attributes.cv} />
    </article>
  );
}
