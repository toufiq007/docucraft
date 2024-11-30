import ContentDisplay from "@/components/ContentDisplay";

const SubContentId = ({ params: { subContentId } }) => {
  return (
    <div className="mt-[100px] px-2">
      <ContentDisplay id={subContentId} />
    </div>
  );
};

export default SubContentId;
