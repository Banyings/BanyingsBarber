import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: SocialLinks;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Hyppolite B ',
    role: 'Master Barber',
    bio: 'John has 15+ years of experience in delivering classic and modern styles with unmatched precision.',
    image: '/image.png',
    socials: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: '2',
    name: 'Chebi B',
    role: 'Stylist & Grooming Expert',
    bio: "Jane specializes in beard grooming and stylish cuts tailored to each client's personality.",
    image: '/image.png',
    socials: {
      instagram: '#',
      facebook: '#'
    }
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Traditional Shave Specialist',
    bio: 'Michael is a master of traditional hot towel shaves, ensuring a luxurious experience.',
    image: '/image.png',
    socials: {
      instagram: '#',
      twitter: '#'
    }
  },
  {
    id: '4',
    name: 'Emily Davis',
    role: 'Junior Barber',
    bio: 'Emily is passionate about precision and style, bringing fresh ideas to the team.',
    image: '/image.png',
    socials: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
];

interface SocialLinksProps {
  socials: SocialLinks;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => (
  <div className="flex gap-3 mt-4">
    {socials.instagram && (
      <a href={socials.instagram} className="text-gray-600 hover:text-amber-500 transition-colors">
        <Instagram size={18} />
      </a>
    )}
    {socials.facebook && (
      <a href={socials.facebook} className="text-gray-600 hover:text-amber-500 transition-colors">
        <Facebook size={18} />
      </a>
    )}
    {socials.twitter && (
      <a href={socials.twitter} className="text-gray-600 hover:text-amber-500 transition-colors">
        <Twitter size={18} />
      </a>
    )}
  </div>
);

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our skilled team of barbers combines years of experience with a passion for craft,
            ensuring you leave our shop looking and feeling your best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-48 bg-gray-200 relative">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={member.id === '1'}
                  fill
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 hover:text-amber-500 transition-colors">
                  {member.name}
                </h2>
                <h3 className="text-amber-500 font-semibold mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <SocialLinks socials={member.socials} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/components/booking"
            className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition inline-block"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;