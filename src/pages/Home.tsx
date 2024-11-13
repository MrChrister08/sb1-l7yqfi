import { CodeBlock } from '../components/CodeBlock';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <CodeBlock>
        {`const developer = {
  name: "",
  title: "",
  bio: "",
  skills: []
}`}
      </CodeBlock>
      
      <div className="mt-12 space-y-8">
        <section className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <div className="mt-4 space-y-4">
            {/* Content to be filled later */}
          </div>
        </section>
      </div>
    </div>
  );
}