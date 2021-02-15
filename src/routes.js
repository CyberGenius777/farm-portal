import {
  AFFILIATE_PROGRAMS,
  PORTALS,
  INTERESTING_RESOURCES,
  YOUTUBE_CHANNELS,
  TRAFFIC_ANALYSIS,
  TERMINOLOGY,
  SERVICES,
} from './consts'

import AffiliatePrograms from './pages/AffiliatePrograms'
import InterestingResources from './pages/InterestingResources'
import Portals from './pages/Portals'
import Services from './pages/Services'
import Terminology from './pages/Terminology'
import TrafficAnalysis from './pages/TrafficAnalysis'
import YoutubeChannels from './pages/YoutubeChannels'

export const authRoutes = [
  { path: PORTALS, Component: Portals },
  { path: INTERESTING_RESOURCES, Component: InterestingResources },
  { path: YOUTUBE_CHANNELS, Component: YoutubeChannels },
  { path: TRAFFIC_ANALYSIS, Component: TrafficAnalysis },
  { path: AFFILIATE_PROGRAMS, Component: AffiliatePrograms },
  { path: TERMINOLOGY, Component: Terminology },
  { path: SERVICES, Component: Services },
]
