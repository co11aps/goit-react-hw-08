import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const styles = {};

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
      </div>
    </>
  );
}
