import { useEffect, useState } from "react";
import startupsService from "../../services/StartupsService";
import Startup from "./Startup";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import PaginationLeftArrowIcon from "../icons/PaginationLeftArrowIcon";
import PaginationRightArrowIcon from "../icons/PaginationRightArrowIcon";

const StartupsList = () => {
  const [startups, setStartups] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState();

  const getData = async (pageNumber) => {
    try {
      const response = await startupsService.getStartups(pageNumber);

      setStartups(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value - 1);
  };

  useEffect(() => {
    getData(pageNumber);
  }, [pageNumber]);

  return (
    <Stack gap={12} alignItems="center">
      {startups.map((startup, index) => (
        <Startup
          key={index}
          imageSrc={`data:image/jpeg;base64,${startup.image}`}
          title={startup.title}
          currency={startup.finance.currency}
          price={startup.finance.amount}
          description={startup.description}
        />
      ))}
      {startups.length > 0 && (
        <Pagination
          size="large"
          count={totalPages}
          page={pageNumber + 1}
          onChange={handlePageNumberChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: PaginationLeftArrowIcon,
                next: PaginationRightArrowIcon,
              }}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default StartupsList;
