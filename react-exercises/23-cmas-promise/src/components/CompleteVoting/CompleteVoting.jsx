import React from "react";

import MainLayout from "../Layouts/MainLayout";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

function CompleteVoting(props) {
  return (
    <MainLayout className="text-center">
      <div>No more categories left.</div>
      <div>
        <button type="button" onClick={props.completeVoting} className="btn btn-link btn-lg">
          Complete and send my votes to the CMAs
        </button>
        {props.isLoading && <Loading />}
        {props.hasError && <ErrorMessage>There's an error!</ErrorMessage>}
      </div>
      {props.isComplete}
    </MainLayout>
  );
}

export default CompleteVoting;
