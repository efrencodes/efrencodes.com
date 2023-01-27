import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import getPost from 'utils/getPost'
import getPosts from 'utils/getPosts'
import { ImageWrapper } from '@components/index'

const Articles = ({ data, content }) => {
	return (
		<main>
			<section className="pt-16 pb-6">
				<ImageWrapper
					width={100}
					height={100}
					thumbnail={data.cover}
					alt={data.title}
				/>
				<h1 className="text-3xl font-medium text-gray-900 leading-normal pt-4">
					{data.title}
				</h1>
				<p className="italic text-sm pt-2">{data.description}</p>
			</section>
			<div
				className="pt-4 pb-[150px] prose-a:text-pink-600 prose-a:underline prose-h2:text-xl prose-h2:font-medium
				prose-h2:tracking-wide prose-h2:text-gray-800 prose-strong:text-gray-900 prose-strong:font-medium
				prose-strong:lining-nums prose-ul:list-disc prose-ul:mt-4 prose-ul:mb-4 prose-ul:list-inside prose-li:text-gray-600
				prose-li:font-normal prose-li:text-base"
			>
				<MDXRemote {...content} />
			</div>
		</main>
	)
}

export default Articles

export const getStaticPaths = async () => {
	const posts = await getPosts()
	const paths = posts.map((post) => ({ params: { slug: post?.slug } }))
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const post = await getPost(params.slug)
	const mdxSource = await serialize(post.content, {
		parseFrontmatter: true,
		scope: {}
	})
	return {
		props: {
			data: post.data,
			content: mdxSource
		}
	}
}
