import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {


  return (
     <Stack gap={2} justifyContent='start' flexWrap='wrap' direction='row'>
        {videos.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
 
        ))}
     </Stack>
  )
}

export default Videos