import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import useEventsStatuses from "../../../core/hooks/useEventsStatuses";
import useEventsTypes from "../../../core/hooks/useEventsTypes";
import "./EventsFilter.css";

interface EventsFilterProps {
  search: string;
  onSearchChange: (text: string) => void;
  status: string;
  onStatusChange: (text: string) => void;
  type: string;
  onTypeChange: (text: string) => void;
}

export default function EventsFilter(
  {
    search, 
    onSearchChange,
    status,
    onStatusChange,
    type,
    onTypeChange,
  }: EventsFilterProps,
) {
  const {data: statuses} = useEventsStatuses();
  const {data: types} = useEventsTypes();

  return (
    <section className="events-filter">
      <div className="events-filter__search">
        <span className="events-filter__search-icon">⌕</span>

        <Input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={event => onSearchChange(event.target.value.trim())}
        />
      </div>

      <Select 
        value={type}
        onChange={(event) => onTypeChange(event.target.value)}
      >
        <option value="">ALL TYPES</option>
        {
          types.map(type => {
            return (
              <option key={type.id} value={type.name}>
                {type.name.toUpperCase()}
              </option>
            );
          })
        }
      </Select>

      <Select 
        value={status}
        onChange={event => onStatusChange(event.target.value)}
      >
        <option value="">ALL STATUSES</option>
        {
          statuses.map(status => {
            return (
              <option key={status.id} value={status.name}>
                {status.name.toUpperCase()}
              </option>
            );
          })
        }
      </Select>
    </section>
  );
}