import { Octokit } from '@octokit/rest';
import { ref } from 'vue';

const octokit = new Octokit({
  auth: process.env.SECRET,
  log: {
    debug: msg => {
      console.log(msg);
    },
    error: msg => {
      if (process.env.NODE_ENV === 'development') console.log(msg);
    },
    info: msg => {
      console.log(msg);
    },
    warn: msg => {
      console.log(msg);
    },
  },
});

type Project = Parameters<
  Exclude<
    Parameters<
      PromiseFulfilledResult<
        ReturnType<typeof octokit.repos.listForUser>
      >['value']['then']
    >['0'],
    null | undefined
  >
>[0]['data'][number];

const profilePic = ref('');
const projects = ref<Project[]>([]);
projects.value = [];

const fetchProfilePic = async () =>
  octokit.users
    .getByUsername({
      username: 'RayhanHamada',
    })
    .then(res => {
      profilePic.value = res.data.avatar_url;
    })
    .catch(() => {
      if (process.env.NODE_ENV === 'development')
        console.log('Error when fetching profilePic');
    });

const fetchProjects = async () => {
  octokit.repos
    .listForUser({
      username: 'RayhanHamada',
    })
    .then(res => {
      projects.value = res.data;
    })
    .catch(() => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Error when fetching projects`);
      }
    });
};

export const useGithub = () => ({
  profilePic,
  fetchProfilePic,
  projects,
  fetchProjects,
});
