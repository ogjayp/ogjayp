import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ibmPlexMono } from '@/app/_app'
import { cn } from '@/lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with consistent hierarchy matching your home page
    h1: ({ children, ...props }) => (
      <h1 
        className="text-4xl md:text-5xl font-semibold mb-8 text-foreground leading-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 
        className="text-3xl md:text-4xl font-semibold mb-6 mt-12 text-foreground leading-tight"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 
        className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-foreground leading-tight"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 
        className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-foreground"
        {...props}
      >
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5 
        className="text-lg md:text-xl font-semibold mb-2 mt-4 text-foreground"
        {...props}
      >
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6 
        className="text-base md:text-lg font-semibold mb-2 mt-4 text-foreground"
        {...props}
      >
        {children}
      </h6>
    ),

    // Paragraphs with consistent spacing and muted color like your home page
    p: ({ children, ...props }) => (
      <p 
        className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg"
        {...props}
      >
        {children}
      </p>
    ),

    // Links with emerald accent matching your design
    a: ({ children, href, ...props }) => (
      <Link 
        href={href || '#'}
        className="text-emerald-800 hover:text-emerald-600 underline underline-offset-4 transition-colors font-medium"
        {...props}
      >
        {children}
      </Link>
    ),

    // Lists with proper spacing
    ul: ({ children, ...props }) => (
      <ul 
        className="list-disc list-inside mb-6 space-y-2 text-muted-foreground ml-4"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol 
        className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground ml-4"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li 
        className="text-base md:text-lg leading-relaxed"
        {...props}
      >
        {children}
      </li>
    ),

    // Code blocks with IBM Plex Mono font like your home page
    code: ({ children, ...props }) => (
      <code 
        className={cn(
          "bg-muted px-2 py-1 rounded text-sm font-medium text-emerald-800",
          ibmPlexMono.className
        )}
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre 
        className={cn(
          "bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-sm border shadow-sm",
          ibmPlexMono.className
        )}
        {...props}
      >
        {children}
      </pre>
    ),

    // Blockquotes with card-like styling
    blockquote: ({ children, ...props }) => (
      <Card className="mb-6 border-l-4 border-l-emerald-800 bg-emerald-50/30">
        <CardContent className="pt-6">
          <blockquote 
            className="text-muted-foreground italic text-lg leading-relaxed"
            {...props}
          >
            {children}
          </blockquote>
        </CardContent>
      </Card>
    ),

    // Images with consistent styling and shadows like your project images
    img: ({ src, alt, ...props }) => (
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="object-cover w-full h-auto"
          {...props}
        />
      </div>
    ),

    // Horizontal rule
    hr: ({ ...props }) => (
      <hr 
        className="border-border my-12"
        {...props}
      />
    ),

    // Tables with clean styling
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table 
          className="w-full border-collapse border border-border rounded-lg"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead 
        className="bg-muted"
        {...props}
      >
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr 
        className="border-b border-border"
        {...props}
      >
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th 
        className="text-left p-4 font-semibold text-foreground"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td 
        className="p-4 text-muted-foreground"
        {...props}
      >
        {children}
      </td>
    ),

    // Custom components that match your design system
    Badge: ({ children, variant = "outline", className, ...props }) => (
      <Badge 
        variant={variant}
        className={cn("bg-emerald-800 text-white border-emerald-800", className)}
        {...props}
      >
        {children}
      </Badge>
    ),

    ...components,
  }
}