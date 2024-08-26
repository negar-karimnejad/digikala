import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import StoryModel from "models/Story";

export default function StoriesPage() {
  return <StoriesTable />;
}

async function StoriesTable() {
  const stories = await StoryModel.find({});

  return (
    <>
      <PageHeader title="داستان ها" href="/admin/stories/new" />
      {stories.length ? (
        <AdminTable stories={stories} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
