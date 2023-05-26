type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params: { slug } }: Props) {
	return {
		title: slug,
	};
}

const layout = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>;
};

export default layout;
