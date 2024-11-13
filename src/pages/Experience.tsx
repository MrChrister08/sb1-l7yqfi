import { CodeBlock } from '../components/CodeBlock';

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <CodeBlock>
        {`interface Experience {
  languages: string[];
  frameworks: string[];
  projects: Project[];
}`}
      </CodeBlock>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content to be filled later */}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-8">
            {/* Content to be filled later */}
          </div>
        </section>
      </div>
    </div>
  );
}