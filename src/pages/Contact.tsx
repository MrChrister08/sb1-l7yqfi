import { Github, Linkedin, Mail } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <CodeBlock>
        {`const contact = {
  email: "",
  social: {
    github: "",
    linkedin: ""
  }
}`}
      </CodeBlock>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6" />
            <span>{/* Email to be filled later */}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Github className="w-6 h-6" />
            <span>{/* GitHub to be filled later */}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="w-6 h-6" />
            <span>{/* LinkedIn to be filled later */}</span>
          </div>
        </div>
      </div>
    </div>
  );
}