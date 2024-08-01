import PageHeader from "@/components/admin/PageHeader";
import StoryForm from "@/components/admin/StoryForm";

export default async function NewProductPage() {

  return (
    <>
      <PageHeader title="افزودن داستان جدید" />
      <StoryForm />
    </>
  );
}
