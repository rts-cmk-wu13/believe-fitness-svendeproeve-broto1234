
import SnapClasses from "@/components/classes/SnapClasses";

export default function SearchFilter({ filteredClasses }) {

  // console.log("ActivitiesCard received filtered activities:", filteredActivities);
  // const [filtered, setFiltered] = useState(activities);

  return (
      <div className="grid grid-cols-1 gap-4 pb-2">
        {filteredClasses.length ? (
          <SnapClasses classes={filteredClasses} />
        ) 
        : <p className="text-sm text-gray-500">Your search did not give any results. Try to search for something else.</p>
      }
      </div>
  );
}