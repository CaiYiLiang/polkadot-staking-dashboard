import Link from 'next/link';
import Image from 'next/image';
import subvis from '../public/subvis.png';

export default function Sidebar() {
  return (
    <nav className="w-48 md:w-60 px-8 pt-4 shadow-lg">
      <div className="mb-12">
        <Link href="/">
          <a>
            <Image src={subvis} width={34} height={45} alt="subvis logo" />
          </a>
        </Link>
      </div>
      <div className="my-8">
        <Link href="/">
          <a>Staking</a>
        </Link>
      </div>
      <div className="my-8">
        <Link href="https://subvis.io/" passHref={true}>
          <a target="_blank" rel="noreferrer">
            Auction
          </a>
        </Link>
      </div>
      <div className="my-8">
        <Link href="https://subvis.io/crowdloan" passHref={true}>
          <a target="_blank" rel="noreferrer">
            Crowdloan
          </a>
        </Link>
      </div>
    </nav>
  );
}
