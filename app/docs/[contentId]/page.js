import ContentDisplay from "@/components/ContentDisplay";

const ParentContent = ({ params: { contentId } }) => {
  return (
    <div className="mt-[100px] px-2">
      <ContentDisplay id={contentId} />
    </div>
  );
};

export default ParentContent;
