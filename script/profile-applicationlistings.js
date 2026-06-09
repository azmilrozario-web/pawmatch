function createApplicationArticle(item) {
  // 1. Create the article container
  const article = document.createElement("article");
  article.classList.add("application-card");

  // 2. Create pet summary container
  const divPetSummary = document.createElement("div");
  divPetSummary.classList.add("pet-summary");

  // 3. Create the Image
  const img = document.createElement("img");
  img.src = item["pet"].imageUrl;

  // 4. Create the pet info.
  const divPetInfo = document.createElement("div");

  // 5. Create application id paragraph
  const paraApplicationId = document.createElement("p");
  paraApplicationId.classList.add("application-id");
  paraApplicationId.textContent = `Application id: ${item.application_id}`;

  // 6. Create application pet name
  const h3ApplicationPetName = document.createElement("h3");
  h3ApplicationPetName.textContent = item.pet["name"];
  
  
  // 7. Create application pet name
  const paraApplicationPetType = document.createElement("p");
  paraApplicationPetType.textContent = item.pet["animalType"];

  // 8. Create Application Data
  const dlApplicationMeta = document.createElement("dl");
  dlApplicationMeta.classList.add("application-meta");

  // 9. Create the Application ID data
  const divApplicationID = document.createElement("div");
  const dtApplicationID = document.createElement("dt");
  dtApplicationID.textContent = "Application ID";

  const ddApplicationID = document.createElement("dd");
  ddApplicationID.textContent = item.application_id;
  
  divApplicationID.append(dtApplicationID, ddApplicationID);

  // 9. Create the Application Request data
  const divApplicationRequest = document.createElement("div");
  const dtApplicationRequest = document.createElement("dt");
  dtApplicationRequest.textContent = "Application Date";

  const ddApplicationRequest = document.createElement("dd");
  ddApplicationRequest.textContent = item.applicationDate;

  divApplicationRequest.append(dtApplicationRequest, ddApplicationRequest);

  // 10. Create the Application Reason data
  const divApplicationReason = document.createElement("div");
  const dtApplicationReason = document.createElement("dt");
  dtApplicationReason.textContent = "Reason";

  const ddApplicationReason = document.createElement("dd");
  ddApplicationReason.textContent = item.reason;

  divApplicationReason.append(dtApplicationReason, ddApplicationReason);
  
  dlApplicationMeta.append(
    divApplicationID, 
    divApplicationRequest, 
    divApplicationReason,
  );
  
  // 11. Create the Application Approved data
  const divApplicationApproval = document.createElement("div");
  divApplicationApproval.classList.add("application-update");
  
  const spanApplicationApproval = document.createElement("span");
  
  const statusColour = (item.approvalStatus === "PENDING") ? "status-review" : 
                        (item.approvalStatus === "APPROVED") ? "status-approved" : "status-declined";

  const statusIcon = (item.approvalStatus === "PENDING") ? "bi-clock-fill" : 
                        (item.approvalStatus === "APPROVED") ? "bi-check-circle-fill" : "bi-x-circle-fill";

  spanApplicationApproval.classList.add("status", statusColour);
  
  const italicApplicationApproval = document.createElement("i");
  italicApplicationApproval.classList.add("bi", statusIcon);
  italicApplicationApproval.setAttribute("aria-hidden", "true");
  italicApplicationApproval.textContent = `  ${item.approvalStatus}`;

  spanApplicationApproval.append(italicApplicationApproval);
  divApplicationApproval.append(spanApplicationApproval);

  divPetInfo.append(
    paraApplicationId, 
    h3ApplicationPetName, 
    paraApplicationPetType);

  divPetSummary.append(img, divPetInfo);

  article.append(divPetSummary, dlApplicationMeta, divApplicationApproval);

  return article;
}

function createNoApplicationException(message) {
    const article = document.createElement("article");
    article.classList.add("application-card", "d-flex", "justify-content-center");

    const divNoApplications = document.createElement("div");
    divNoApplications.classList.add("text-center", "text-danger", "fs-5");
    divNoApplications.textContent = message;
    article.append(divNoApplications);

    return article;
}