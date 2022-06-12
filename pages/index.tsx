import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { graphcms, QUERY } from "../services";
import { ISkills, IJobs, IProjects } from "../typings";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

interface IHomeProps {
  jobs: IJobs[];
  projects: IProjects[];
  skills: ISkills[];
}

const Home: NextPage<IHomeProps> = ({ jobs, projects, skills }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <About />
        <Jobs jobs={jobs} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { skills, jobs, projects } = await graphcms.request(QUERY);

  return {
    props: {
      skills,
      jobs,
      projects,
    },
    revalidate: 10,
  };
};
