import { FireIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "JavaScript",
    icon: FireIcon,
  },
  {
    name: "Git and Github",
    icon: FireIcon,
  },
  {
    name: "Backend",
    icon: FireIcon,
  },
  {
    name: "Database",
    icon: FireIcon,
  },
  {
    name: "Frontend",
    icon: FireIcon,
  },
  {
    name: "State Management",
    icon: FireIcon,
  },
  {
    name: "G-Meet Clone",
    icon: FireIcon,
  },
  {
    name: "Typescript",
    icon: FireIcon,
  },
  {
    name: "Monorepo",
    icon: FireIcon,
  },
  {
    name: "Github CI/CD",
    icon: FireIcon,
  }, {
    name: "SQL",
    icon: FireIcon,
  }, {
    name: "Prisma",
    icon: FireIcon,
  }, {
    name: "tRPC",
    icon: FireIcon,
  }, {
    name: "Docker",
    icon: FireIcon,
  }, {
    name: "GraphQL",
    icon: FireIcon,
  }, {
    name: "Redis",
    icon: FireIcon,
  },{
    name: "Scalable Chat System",
    icon: FireIcon,
  }, {
    name: "Autoscaling Backend",
    icon: FireIcon,
  }, 
  {
    name: "System Design",
    icon: FireIcon,
  },{
    name: "Open Source Contribution",
    icon: FireIcon,
  }, {
    name: "Freelancing Master Class",
    icon: FireIcon,
  },
];

function CohortOneFeatures() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CohortOneFeatures;