import { useSearchParams } from "react-router";
import { searchQueryChage } from "../helpers/search-query-change";

export default function useEventsUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') ?? '';
  const status = searchParams.get('status') ?? '';
  const type = searchParams.get('type') ?? '';
  const page = searchParams.get('_page') ?? 1;
  const perPage = searchParams.get('_per_page') ?? 20;

  const setTitle = searchQueryChage<string>(
    'title', 
    searchParams, 
    setSearchParams, 
    (params) => params.set('_page', '1'),
  );

  const setStatus = searchQueryChage<string>(
    'status', 
    searchParams, 
    setSearchParams, 
    (params) => params.set('_page', '1'),
  );

  const setType = searchQueryChage<string>(
    'type', 
    searchParams, 
    setSearchParams, 
    (params) => params.set('_page', '1'),
  );

  const setPage = searchQueryChage<number>(
    '_page', 
    searchParams, 
    setSearchParams, 
  );

  const setPerPage = searchQueryChage<number>(
    '_per_page', 
    searchParams, 
    setSearchParams, 
  );

  return {
    filters: {
      title,
      type,
      status,
      page,
      perPage,
    },
    setPage,
    setTitle,
    setType,
    setStatus,
    setPerPage,
  }
}