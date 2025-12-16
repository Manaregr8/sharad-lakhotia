import { ImageResponse } from "@vercel/og";
import { prisma as prismaClient } from "@/lib/prisma";

const fontStack = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';

interface OgPayload {
	title: string;
	excerpt: string;
	banner: string;
}

function renderImage({ title, excerpt, banner }: OgPayload) {
	return new ImageResponse(
		<div
			style={{
				background: "linear-gradient(120deg,#eaf6ff,#e6fff4)",
				height: "100%",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "60px",
				boxSizing: "border-box",
				fontFamily: fontStack
			}}
		>
			<div style={{ maxWidth: 800 }}>
				<div style={{ fontSize: 42, fontWeight: 700, color: "#0b1736", marginBottom: 14 }}>{title}</div>
				<div style={{ fontSize: 20, color: "#234" }}>{excerpt}</div>
			</div>
			<div
				style={{
					width: 420,
					height: 280,
					borderRadius: 16,
					overflow: "hidden",
					background: `url(${banner}) center/cover no-repeat`
				}}
			/>
		</div>,
		{ width: 1200, height: 630 }
	);
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
	if (!prismaClient) {
		console.error("Prisma client is not initialised. Cannot render OG image.");
		return new Response("Service unavailable", { status: 503 });
	}

	try {
		const post = await prismaClient.blog.findFirst({
			where: { slug: params.slug, published: true },
			select: { title: true, excerpt: true, banner: true }
		});

		if (!post) {
			return new Response("Not found", { status: 404 });
		}

		return renderImage(post);
	} catch (error) {
		console.error("Failed to generate OG image from database", error);
		return new Response("Service unavailable", { status: 503 });
	}
}
