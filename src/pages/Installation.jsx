import Header from "../components/UI/Header.jsx";
import PageTitle from "../components/UI/PageTitle.jsx";
import SectionWrapper from "../components/UI/SectionWrapper.jsx";
import TopicWrapper from "../components/UI/TopicWrapper.jsx";
import { INSTALLATION_TOPICS_ARRAY } from "../topics-data.js";
import TableOfContents from "../components/UI/TableOfContents.jsx";
import ScrollToTopButton from "../components/UI/ScrollToTopButton.jsx";

export default function InstallationPage() {
  return (
    <>
      <Header />

      <PageTitle>Installation</PageTitle>

      <SectionWrapper>
        <TableOfContents topics={INSTALLATION_TOPICS_ARRAY} />

        <ul>
          <TopicWrapper topics={INSTALLATION_TOPICS_ARRAY} />
        </ul>
      </SectionWrapper>

      <ScrollToTopButton />
    </>
  );
}

