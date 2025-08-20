import { Container, Link, Typography } from '@mui/material';
import styles from './Styles.module.scss';
import APIFeature from './APIFeature';

export default function AboutAPI() {
   return (
      <Container className={styles.aboutApi} maxWidth="lg">
         <Typography variant="h2" align="center">
            📡 About the API
         </Typography>
         <Typography align="center">
            DevQuizzer uses the{' '}
            <Link href="https://quizapi.io/">QuizAPI.io</Link> to fetch
            high-quality tech questions across various categories like Web
            Development, DevOps, Databases, and more. All questions are tailored
            for developers and include multiple choice, true/false, and other
            formats. Thanks to this API, DevQuizzer can provide random quizzes
            on the fly or let you configure your own challenge without manually
            building a question set.
         </Typography>
         {/* <Image width={350} height={144} src={apilogo} alt="api logo" /> */}
         <div className={styles.apiFeatures}>
            <APIFeature
               icon="🙌"
               title="Wide range of categories"
               description="Web Development, DevOps, Databases, Cloud, Linux, and more."
            />
            <APIFeature
               icon="🧠"
               title="Multiple difficulty levels"
               description="Questions are available in Easy, Medium, and Hard modes."
            />
            <APIFeature
               icon="🧩"
               title="Flexible formats"
               description="Single-choice, multiple-choice, and true/false questions keep quizzes dynamic."
            />
            <APIFeature
               icon="👨‍💻"
               title="Developer-focused"
               description="All content is tailored specifically for IT professionals and learners."
            />
            <APIFeature
               icon="🗓️"
               title="Up-to-date content"
               description="The API is regularly refreshed with new questions to stay relevant."
            />
         </div>
      </Container>
   );
}
