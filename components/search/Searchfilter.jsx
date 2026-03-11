
import SnapClasses from "../classes/SnapClasses";

export default function SearchFilter({ filteredClasses }) {
  // console.log("ActivitiesCard received filtered activities:", filteredActivities);
  // const [filtered, setFiltered] = useState(activities);

  return (
      <div className="grid grid-cols-1 gap-4 pb-2">
        <h1 className="text-2xl">Aktiviteter</h1>
        <SnapClasses classes={filteredClasses} />
        {/* <ActivitiesFiltered activities={activities} /> */}
        {/* <ActivitiesFiltered activities={filteredActivities} />   */}
      </div>
  );
}