import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { getPostList } from '@/utils/post'
import { Box, Container, Typography, Divider, Stack } from '@mui/material'
import PostItem from '@/components/blog/postItem'
import { Post } from '@/models/posts'
import { format } from 'date-fns'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkPrism from 'remark-prism'
import Script from 'next/script'
import Seo from '@/components/common/seo'

export interface BlogDetailPost {
  post: Post
}

export default function BlogDetailPost({ post }: BlogDetailPost) {
  const elRef = useRef<React.LegacyRef<HTMLDivElement>>()

  useLayoutEffect(() => {
    if (elRef.current) {
      console.log(elRef.current)
    }
  })
  if (!post) return null
  return (
    <Box mt={8}>
      <Seo
        data={{
          title: `${post.title} Next.js`,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl:
            post.thumbnailUrl ||
            'https://online.codienhanoi.edu.vn/pluginfile.php/1/blog/attachment/13/nextjs.jpeg',
        }}
      />
      <Container>
        <Typography
          variant={'h4'}
          fontSize={{ tabletMini: '26px', mobile: '22px' }}
          fontWeight="bold"
        >
          {post.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
            {format(new Date(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
            {post.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography mb={1} variant={'body1'}>
          {`Tác giả: ${post.author?.name}`}
        </Typography>
        <Typography mb={2} variant={'body1'}>
          {`Công việc: ${post.author?.title}`}
        </Typography>

        <div
          style={{
            marginBottom: '10px',
          }}
          dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
        ></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()

  return {
    paths: postList.map((x: Post) => ({ params: { slug: x.slug } })),

    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogDetailPost> = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug

  if (!slug) return { notFound: true }

  const postList = await getPostList()
  const data = postList.find((p) => p.slug === slug)
  if (!data) return { notFound: true }
  // concert markdown to html

  const htmlFile = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'agenda.*' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)

    .use(rehypeStringify)
    .process(data.mdContent || '')

  data.htmlContent = htmlFile.toString()

  return {
    props: {
      post: data,
    },
  }
}
