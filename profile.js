const API_BASE_URL = "http://localhost:8080";
const TOKEN_STORAGE_KEYS = ["token", "accessToken", "jwtToken"];

const profileElements = {
    name: document.querySelector("#user-name"),
    address: document.querySelector("#user-address"),
    contact: document.querySelector("#user-contact"),
    email: document.querySelector("#user-email"),
    image: document.querySelector("#user-image"),
    applicationCount: document.querySelector("#application-count"),
    applicationList: document.querySelector("#application-list")
};

document.addEventListener("DOMContentLoaded", loadProfilePage);

async function loadProfilePage() {
    const token = getStoredToken();

    if (!token) {
        showPageMessage(
            "Sign in required",
            "Please sign in before viewing your profile and application details."
        );
        return;
    }

    showLoadingState();

    try {
        const [profile, applications] = await Promise.all([
            apiRequest("/restricted/profile", token),
            apiRequest("/restricted/adoptionlist", token)
        ]);

        renderProfile(profile);
        renderApplications(applications);
    } catch (error) {
        console.error("Unable to load profile page:", error);

        if (error.status === 401 || error.status === 403) {
            showPageMessage(
                "Session expired",
                "Please sign in again to view your profile."
            );
            return;
        }

        showPageMessage(
            "Unable to load applications",
            "Please confirm that the PawMatch Spring Boot server is running, then refresh the page."
        );
    }
}

function getStoredToken() {
    for (const storage of [localStorage, sessionStorage]) {
        for (const key of TOKEN_STORAGE_KEYS) {
            const token = storage.getItem(key);

            if (token) {
                return token;
            }
        }
    }

    return null;
}

async function apiRequest(path, token) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const error = new Error(`Request failed with status ${response.status}`);
        error.status = response.status;
        throw error;
    }

    return response.json();
}

function renderProfile(profile) {
    const fullName = [profile.firstName, profile.lastName]
        .filter(Boolean)
        .join(" ");

    profileElements.name.textContent = fullName || "PawMatch User";
    profileElements.address.textContent = profile.address || "Address not provided";
    profileElements.contact.textContent = profile.phone || "Phone not provided";
    profileElements.email.textContent = profile.email || "Email not provided";

    if (profile.imageUrl) {
        profileElements.image.src = profile.imageUrl;
    }

    profileElements.image.alt = `${fullName || "User"} profile`;
}

function renderApplications(applications) {
    const applicationItems = Array.isArray(applications) ? applications : [];

    profileElements.applicationCount.textContent = applicationItems.length;
    profileElements.applicationList.replaceChildren();

    if (applicationItems.length === 0) {
        showPageMessage(
            "No applications yet",
            "Applications you submit for pets will appear here."
        );
        return;
    }

    const fragment = document.createDocumentFragment();

    applicationItems.forEach((application) => {
        fragment.append(createApplicationCard(application));
    });

    profileElements.applicationList.append(fragment);
}

function createApplicationCard(application) {
    const card = createElement("article", "application-card");
    const pet = application.pet || {};
    const statusDetails = getStatusDetails(application.approvalStatus);

    const petSummary = createElement("div", "pet-summary");
    const petImage = document.createElement("img");
    petImage.src = pet.imageUrl || "./imgs/Sheldon.jpg";
    petImage.alt = pet.name || "Pet";
    petImage.addEventListener("error", () => {
        petImage.src = "./imgs/Sheldon.jpg";
    }, { once: true });

    const petText = document.createElement("div");
    petText.append(
        createElement("p", "application-id", `Application #${application.application_id ?? "Pending"}`),
        createElement("h3", "", pet.name || "Pet name unavailable"),
        createElement("p", "", formatLabel(pet.animalType) || "Animal type unavailable")
    );
    petSummary.append(petImage, petText);

    const metadata = createElement("dl", "application-meta");
    metadata.append(
        createMetadata("Applicant ID", application.user_id ?? "Unavailable"),
        createMetadata("Application date", formatDate(application.applicationDate)),
        createMetadata("Reason", application.reason || "No reason provided.")
    );

    const update = createElement("div", "application-update");
    const message = document.createElement("p");
    message.append(
        createElement("strong", "", "Latest message"),
        document.createTextNode(application.message || statusDetails.message)
    );

    const status = createElement("span", `status ${statusDetails.className}`);
    const statusIcon = createElement("i", `bi ${statusDetails.icon}`);
    statusIcon.setAttribute("aria-hidden", "true");
    status.append(statusIcon, document.createTextNode(statusDetails.label));

    update.append(message, status);
    card.append(petSummary, metadata, update);

    return card;
}

function createMetadata(label, value) {
    const wrapper = document.createElement("div");
    wrapper.append(
        createElement("dt", "", label),
        createElement("dd", "", String(value))
    );
    return wrapper;
}

function getStatusDetails(status) {
    const normalizedStatus = String(status || "PENDING").toUpperCase();

    const statuses = {
        APPROVED: {
            label: "Approved",
            className: "status-approved",
            icon: "bi-check-circle-fill",
            message: "Your adoption application has been approved."
        },
        REJECTED: {
            label: "Not approved",
            className: "status-declined",
            icon: "bi-x-circle-fill",
            message: "Your application was not approved. You may apply for another pet."
        },
        PENDING: {
            label: "Under review",
            className: "status-review",
            icon: "bi-clock-fill",
            message: "Your application is being reviewed by the adoption team."
        }
    };

    return statuses[normalizedStatus] || statuses.PENDING;
}

function formatDate(dateValue) {
    if (!dateValue) {
        return "Pending";
    }

    const match = String(dateValue).match(/^(\d{2})-(\d{2})-(\d{4})$/);

    if (!match) {
        return dateValue;
    }

    const [, day, month, year] = match;
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    return new Intl.DateTimeFormat("en-SG", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(date);
}

function formatLabel(value) {
    if (!value) {
        return "";
    }

    return String(value)
        .toLowerCase()
        .replaceAll("_", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function showLoadingState() {
    profileElements.applicationCount.textContent = "...";
    profileElements.applicationList.replaceChildren(
        createPageMessage("Loading application details", "Please wait a moment.")
    );
}

function showPageMessage(title, message) {
    profileElements.applicationCount.textContent = "0";
    profileElements.applicationList.replaceChildren(createPageMessage(title, message));
}

function createPageMessage(title, message) {
    const wrapper = createElement("div", "application-empty");
    const icon = createElement("i", "bi bi-info-circle");
    icon.setAttribute("aria-hidden", "true");
    wrapper.append(
        icon,
        createElement("h3", "", title),
        createElement("p", "", message)
    );
    return wrapper;
}

function createElement(tagName, className = "", text = "") {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text !== "") {
        element.textContent = text;
    }

    return element;
}
