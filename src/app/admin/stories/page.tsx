import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import db from "@/db/db";

export default function StoriesPage() {
  return <StoriesTable />;
}

async function StoriesTable() {
  const stories = await db.story.findMany({ orderBy: { title: "asc" } });

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
