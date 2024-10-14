import AdminTable from "@/components/admin/AdminTable";
import PageHeader from "@/components/admin/PageHeader";
import { serializeDoc } from "@/utils/serializeDoc";
import connectToDB from "config/mongodb";
import StoryModel from "models/Story";

export default async function StoriesPage() {
  await connectToDB();
  const stories = await StoryModel.find({}).lean();
  const serializedStories = serializeDoc(stories);

  return (
    <>
      <PageHeader title="داستان ها" href="/admin/stories/new" />
      {stories.length ? (
        <AdminTable stories={serializedStories} />
      ) : (
        <div className="text-neutral-500">آیتمی برای نمایش وجود ندارد.</div>
      )}
    </>
  );
}
