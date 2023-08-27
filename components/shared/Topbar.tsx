import Link from 'next/link';
import Image from 'next/image';
import { dark } from '@clerk/themes';
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs';
function Topbar() {
	return (
		<nav className="topbar">
			<Link
				href="/"
				className="flex items-center gap-4">
				<Image
					src="/assets/logo.png"
					width={50}
					height={30}
					alt="logo"
				/>
				<p className="text-heading3-bold text-light-1 max-xs:hidden">
					BRACU সংলাপ
				</p>
			</Link>
			<div className="flex items-center gap-1">
				<div className="block md:hidden">
					<SignedIn>
						<SignOutButton>
							<div className="flex cursor-pointer">
								<Image
									src="/assets/logout.svg"
									alt="logout"
									width={24}
									height={24}></Image>
							</div>
						</SignOutButton>
					</SignedIn>
				</div>
				<OrganizationSwitcher
					appearance={{
						baseTheme: dark,
						elements: {
							organizationSwitcherTrigger: 'py-2 px-4',
						},
					}}
				/>
			</div>
		</nav>
	);
}

export default Topbar;
