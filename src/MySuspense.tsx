import React from 'react';

type TSuspense = {
	importPath: string;
};
const MySuspense = React.memo(({ importPath }: TSuspense) => {
	const Component = React.lazy(() => import(importPath));

	return (
		<React.Suspense fallback={<div />}>
			<Component />
		</React.Suspense>
	);
});

export default MySuspense;
