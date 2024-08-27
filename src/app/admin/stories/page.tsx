import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import connectToDB from "configs/db";
import StoryModel from "models/Story";

export default function StoriesPage() {
  return <StoriesTable />;
}

async function StoriesTable() {
  connectToDB();
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
